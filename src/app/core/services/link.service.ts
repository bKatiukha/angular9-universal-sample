/*
 * -- LinkService --        [Temporary]
 * @MarkPieszak
 *
 * Similar to Meta service but made to handle <link> creation for SEO purposes
 * -- NOTE: Soon there will be an overall DocumentService within Angular that handles Meta/Link everything
 */


// https://github.com/angular/angular/issues/15776
import {Inject, Injectable, RendererFactory2, ViewEncapsulation} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {TranslatesService} from '@shared/translates';
import {RedirectService} from './redirect.service';

@Injectable()
export class LinkService {

  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document,
    private redirectService: RedirectService,
    private translateService: TranslatesService
  ) {
  }

  /**
   * Inject the State into the bottom of the <head>
   */
  addTag(tag: LinkDefinition, forceCreation?: boolean) {

    try {
      const renderer = this.rendererFactory.createRenderer(this.document, {
        id: '-1',
        encapsulation: ViewEncapsulation.None,
        styles: [],
        data: {}
      });

      const link = renderer.createElement('link');
      const head = this.document.head;
      const selector = this._parseSelector(tag);

      if (head === null) {
        throw new Error('<head> not found within DOCUMENT.');
      }

      Object.keys(tag).forEach((prop: string) => {
        return renderer.setAttribute(link, prop, tag[prop]);
      });

      // [TODO]: get them to update the existing one (if it exists) ?
      renderer.appendChild(head, link);

    } catch (e) {
      console.error('Error within linkService : ', e);
    }
  }

  private _parseSelector(tag: LinkDefinition): string {
    // Possibly re-work this
    const attr: string = tag.rel ? 'rel' : 'hreflang';
    return `${attr}="${tag[attr]}"`;
  }

  setCanonicaLink(href) {
    this.removeTag('rel=canonical');
    const lang = this.translateService.getCurrentLang();
    const link = this.redirectService.getTranslatedPath(href.split('/'), lang).join('/');
    console.log(`https://ekassa.eu/${lang}/${link}`);
    if (link === '') {     // for main page
        this.addTag({rel : 'canonical', href: `https://ekassa.eu/${lang}`});
    } else {
        this.addTag({rel : 'canonical', href: `https://ekassa.eu/${lang}/${link}`});
    }
  }

  setAlternateLink(url) {
    this.removeTag('rel=alternate');
    console.log(url);
    // const lang = this.translateService.getCurrentLang();
    const lang = this.translateService.getCurrentLang();
    const link = this.redirectService.getTranslatedPath(url.split('/'), lang).join('/');
    console.log(`https://ekassa.eu/${lang}/${link}`);
    if (link === '') {     // for main page
          this.addTag({rel: 'alternate', href: `https://ekassa.eu/${lang}`});
      } else {
          this.addTag({rel: 'alternate', href: `https://ekassa.eu/${lang}/${link}`});
      }
  }

  removeTag(attrSelector: string) {
    if (attrSelector) {
      try {
        const renderer = this.rendererFactory.createRenderer(this.document, {
          id: '-1',
          encapsulation: ViewEncapsulation.None,
          styles: [],
          data: {}
        });
        const head = this.document.head;
        if (head === null) {
          throw new Error('<head> not found within DOCUMENT.');
        }
        const linkTags = this.document.querySelectorAll('link[' + attrSelector + ']');
        for (const link of linkTags) {
          renderer.removeChild(head, link);
        }
      } catch (e) {
        console.log('Error while removing tag ' + e.message);
      }
    }
  }
}

export declare type LinkDefinition = {
  charset?: string;
  crossorigin?: string;
  href?: string;
  hreflang?: string;
  media?: string;
  rel?: string;
  rev?: string;
  sizes?: string;
  target?: string;
  type?: string;
} & {
  [prop: string]: string;
};
