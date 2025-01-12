import {
  IMask,
  PIPE_TYPE,
  pipe
} from "./chunk-U5TDPG6T.js";
import {
  COMPOSITION_BUFFER_MODE,
  NG_VALUE_ACCESSOR
} from "./chunk-DMGK2ZDB.js";
import {
  isPlatformBrowser
} from "./chunk-L6EZLHGO.js";
import {
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  Pipe,
  Renderer2,
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵlistener
} from "./chunk-U2X637TK.js";
import "./chunk-6TPRO5Z5.js";
import "./chunk-6SR426KC.js";
import "./chunk-UR54J2HQ.js";
import "./chunk-REJARLXV.js";

// node_modules/angular-imask/fesm2022/angular-imask.mjs
var _DefaultImaskFactory = class _DefaultImaskFactory {
  create(el, opts) {
    return IMask(el, opts);
  }
};
_DefaultImaskFactory.ɵfac = function DefaultImaskFactory_Factory(t) {
  return new (t || _DefaultImaskFactory)();
};
_DefaultImaskFactory.ɵprov = ɵɵdefineInjectable({
  token: _DefaultImaskFactory,
  factory: _DefaultImaskFactory.ɵfac,
  providedIn: "root"
});
var DefaultImaskFactory = _DefaultImaskFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultImaskFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var IMASK_FACTORY = new InjectionToken("IMASK_FACTORY", {
  providedIn: "root",
  factory: () => inject(DefaultImaskFactory)
});
var MASKEDINPUT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => IMaskDirective),
  multi: true
};
var DEFAULT_IMASK_ELEMENT = (elementRef) => elementRef.nativeElement;
var _IMaskDirective = class _IMaskDirective {
  constructor() {
    this.onTouched = () => {
    };
    this.onChange = () => {
    };
    this._viewInitialized = false;
    this._composing = false;
    this._writing = false;
    this._elementRef = inject(ElementRef);
    this._renderer = inject(Renderer2);
    this._factory = inject(IMASK_FACTORY);
    this._platformId = inject(PLATFORM_ID);
    this._compositionMode = inject(COMPOSITION_BUFFER_MODE, {
      optional: true
    }) ?? !this._isAndroid();
    this.imaskElement = DEFAULT_IMASK_ELEMENT;
    this.accept = new EventEmitter();
    this.complete = new EventEmitter();
  }
  get element() {
    return this.imaskElement(this._elementRef, this);
  }
  get maskValue() {
    if (!this.maskRef)
      return this.element?.value || "";
    if (this.unmask === "typed")
      return this.maskRef.typedValue;
    if (this.unmask)
      return this.maskRef.unmaskedValue;
    return this.maskRef.value;
  }
  set maskValue(value) {
    if (this.maskRef) {
      if (this.unmask === "typed")
        this.maskRef.typedValue = value;
      else if (this.unmask)
        this.maskRef.unmaskedValue = value;
      else
        this.maskRef.value = value;
    } else {
      this._renderer.setProperty(this.element, "value", value);
    }
  }
  ngAfterViewInit() {
    if (this.imask)
      this.initMask();
    this._viewInitialized = true;
  }
  ngOnChanges(changes) {
    if (changes["elementRef"] && !this.imaskElement)
      this.imaskElement = DEFAULT_IMASK_ELEMENT;
    if (!changes["imask"] || !this._viewInitialized)
      return;
    if (this.imask) {
      if (this.maskRef)
        this.maskRef.updateOptions(this.imask);
      else {
        this.initMask();
        this.onChange(this.maskValue);
      }
    } else {
      this.destroyMask();
    }
  }
  destroyMask() {
    if (this.maskRef) {
      this.maskRef.destroy();
      delete this.maskRef;
    }
  }
  ngOnDestroy() {
    this.destroyMask();
    this.accept.complete();
    this.complete.complete();
  }
  beginWrite(value) {
    this._writing = true;
    this._writingValue = value;
  }
  endWrite() {
    this._writing = false;
    return this._writingValue;
  }
  writeValue(value) {
    value = value == null && this.unmask !== "typed" ? "" : value;
    if (this.maskRef) {
      this.beginWrite(value);
      this.maskValue = value;
      this.endWrite();
    } else {
      this._renderer.setProperty(this.element, "value", value);
      this._initialValue = value;
    }
  }
  _onAccept() {
    const value = this.maskValue;
    if (this._writing && value === this.endWrite())
      return;
    this.onChange(value);
    this.accept.emit(value);
  }
  _onComplete() {
    this.complete.emit(this.maskValue);
  }
  initMask() {
    this.maskRef = this._factory.create(this.element, this.imask).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this));
    if (this._initialValue != null)
      this.writeValue(this._initialValue);
    delete this._initialValue;
  }
  setDisabledState(isDisabled) {
    this._renderer.setProperty(this.element, "disabled", isDisabled);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  _handleInput(value) {
    if (this.maskRef)
      return;
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  _compositionStart() {
    this._composing = true;
  }
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this._handleInput(value);
  }
  _isAndroid() {
    return isPlatformBrowser(this._platformId) && /android (\d+)/.test(navigator.userAgent.toLowerCase());
  }
};
_IMaskDirective.ɵfac = function IMaskDirective_Factory(t) {
  return new (t || _IMaskDirective)();
};
_IMaskDirective.ɵdir = ɵɵdefineDirective({
  type: _IMaskDirective,
  selectors: [["", "imask", ""]],
  hostBindings: function IMaskDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("input", function IMaskDirective_input_HostBindingHandler($event) {
        return ctx._handleInput($event.target.value);
      })("blur", function IMaskDirective_blur_HostBindingHandler() {
        return ctx.onTouched();
      })("compositionstart", function IMaskDirective_compositionstart_HostBindingHandler() {
        return ctx._compositionStart();
      })("compositionend", function IMaskDirective_compositionend_HostBindingHandler($event) {
        return ctx._compositionEnd($event.target.value);
      });
    }
  },
  inputs: {
    imask: "imask",
    unmask: "unmask",
    imaskElement: "imaskElement"
  },
  outputs: {
    accept: "accept",
    complete: "complete"
  },
  exportAs: ["imask"],
  standalone: true,
  features: [ɵɵProvidersFeature([MASKEDINPUT_VALUE_ACCESSOR]), ɵɵNgOnChangesFeature]
});
var IMaskDirective = _IMaskDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IMaskDirective, [{
    type: Directive,
    args: [{
      selector: "[imask]",
      standalone: true,
      exportAs: "imask",
      host: {
        "(input)": "_handleInput($event.target.value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "_compositionStart()",
        "(compositionend)": "_compositionEnd($event.target.value)"
      },
      providers: [MASKEDINPUT_VALUE_ACCESSOR]
    }]
  }], null, {
    imask: [{
      type: Input
    }],
    unmask: [{
      type: Input
    }],
    imaskElement: [{
      type: Input
    }],
    accept: [{
      type: Output
    }],
    complete: [{
      type: Output
    }]
  });
})();
var _IMaskPipe = class _IMaskPipe {
  transform(...args) {
    return pipe(...args);
  }
};
_IMaskPipe.ɵfac = function IMaskPipe_Factory(t) {
  return new (t || _IMaskPipe)();
};
_IMaskPipe.ɵpipe = ɵɵdefinePipe({
  name: "imask",
  type: _IMaskPipe,
  pure: true,
  standalone: true
});
var IMaskPipe = _IMaskPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IMaskPipe, [{
    type: Pipe,
    args: [{
      name: "imask",
      standalone: true
    }]
  }], null, null);
})();
var _IMaskModule = class _IMaskModule {
};
_IMaskModule.ɵfac = function IMaskModule_Factory(t) {
  return new (t || _IMaskModule)();
};
_IMaskModule.ɵmod = ɵɵdefineNgModule({
  type: _IMaskModule,
  imports: [IMaskDirective, IMaskPipe],
  exports: [IMaskDirective, IMaskPipe]
});
_IMaskModule.ɵinj = ɵɵdefineInjector({});
var IMaskModule = _IMaskModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IMaskModule, [{
    type: NgModule,
    args: [{
      imports: [IMaskDirective, IMaskPipe],
      exports: [IMaskDirective, IMaskPipe]
    }]
  }], null, null);
})();
export {
  DEFAULT_IMASK_ELEMENT,
  DefaultImaskFactory,
  IMASK_FACTORY,
  IMask,
  IMaskDirective,
  IMaskModule,
  IMaskPipe,
  MASKEDINPUT_VALUE_ACCESSOR,
  PIPE_TYPE,
  pipe
};
//# sourceMappingURL=angular-imask.js.map