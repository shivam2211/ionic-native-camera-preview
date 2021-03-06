var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
/**
 * @beta
 * @name Camera Preview
 * @description
 * Showing camera preview in HTML
 *
 * Requires Cordova plugin: `https://github.com/shivam2211/cordova-plugin-camera-preview-think.git.git`. For more info, please see the [Cordova Camera Preview docs](https://github.com/shivam2211/cordova-plugin-camera-preview-think.git).
 *
 * @usage
 * ```typescript
 * import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
 *
 * constructor(private cameraPreview: CameraPreview) { }
 *
 * ...
 *
 * // camera options (Size and location). In the following example, the preview uses the rear camera and display the preview in the back of the webview
 * const cameraPreviewOpts: CameraPreviewOptions = {
 *   x: 0,
 *   y: 0,
 *   width: window.screen.width,
 *   height: window.screen.height,
 *   camera: 'rear',
 *   tapPhoto: true,
 *   previewDrag: true,
 *   toBack: true,
 *   alpha: 1
 * };
 *
 * // start camera
 * this.cameraPreview.startCamera(cameraPreviewOpts).then(
 *   (res) => {
 *     console.log(res)
 *   },
 *   (err) => {
 *     console.log(err)
 *   });
 *
 * // Set the handler to run every time we take a picture
 * this.cameraPreview.setOnPictureTakenHandler().subscribe((result) => {
 *   console.log(result);
 *   // do something with the result
 * });
 *
 *
 * // picture options
 * const pictureOpts: CameraPreviewPictureOptions = {
 *   width: 1280,
 *   height: 1280,
 *   quality: 85
 * }
 *
 * // take a picture
 * this.cameraPreview.takePicture(this.pictureOpts).then((imageData) => {
 *   this.picture = 'data:image/jpeg;base64,' + imageData;
 * }, (err) => {
 *   console.log(err);
 *   this.picture = 'assets/img/test.jpg';
 * });
 *
 *
 * // Switch camera
 * this.cameraPreview.switchCamera();
 *
 * // set color effect to negative
 * this.cameraPreview.setColorEffect('negative');
 *
 * // Stop the camera preview
 * this.cameraPreview.stopCamera();
 *
 * ```
 *
 * @interfaces
 * CameraPreviewOptions
 * CameraPreviewPictureOptions
 * CameraPreviewDimensions
 */
var CameraPreviewThink = (function (_super) {
    __extends(CameraPreviewThink, _super);
    function CameraPreviewThink() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FOCUS_MODE = {
            FIXED: 'fixed',
            AUTO: 'auto',
            CONTINUOUS: 'continuous',
            // IOS Only
            CONTINUOUS_PICTURE: 'continuous-picture',
            // Android Only
            CONTINUOUS_VIDEO: 'continuous-video',
            // Android Only
            EDOF: 'edof',
            // Android Only
            INFINITY: 'infinity',
            // Android Only
            MACRO: 'macro' // Android Only
        };
        _this.EXPOSURE_MODE = {
            LOCK: 'lock',
            // IOS Only
            AUTO: 'auto',
            // IOS Only
            CONTINUOUS: 'continuous',
            CUSTOM: 'custom'
        };
        _this.FLASH_MODE = {
            OFF: 'off',
            ON: 'on',
            AUTO: 'auto',
            RED_EYE: 'red-eye',
            TORCH: 'torch' // Android Only
        };
        _this.COLOR_EFFECT = {
            AQUA: 'aqua',
            // Android Only
            BLACKBOARD: 'blackboard',
            // Android Only
            MONO: 'mono',
            NEGATIVE: 'negative',
            NONE: 'none',
            POSTERIZE: 'posterize',
            SEPIA: 'sepia',
            SOLARIZE: 'solarize',
            // Android Only
            WHITEBOARD: 'whiteboard' // Android Only
        };
        _this.CAMERA_DIRECTION = {
            BACK: 'back',
            FRONT: 'front'
        };
        return _this;
    }
    /**
     * Starts the camera preview instance.
     * @param {CameraPreviewOptions} options
     * @return {Promise<any>}
     */
    /**
       * Starts the camera preview instance.
       * @param {CameraPreviewOptions} options
       * @return {Promise<any>}
       */
      CameraPreviewThink.prototype.startCamera = /**
       * Starts the camera preview instance.
       * @param {CameraPreviewOptions} options
       * @return {Promise<any>}
       */
    function (options) {
        return;
    };
    /**
     * Stops the camera preview instance. (iOS & Android)
     * @return {Promise<any>}
     */
    /**
       * Stops the camera preview instance. (iOS & Android)
       * @return {Promise<any>}
       */
      CameraPreviewThink.prototype.stopCamera = /**
       * Stops the camera preview instance. (iOS & Android)
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Switch from the rear camera and front camera, if available.
     * @return {Promise<any>}
     */
    /**
       * Switch from the rear camera and front camera, if available.
       * @return {Promise<any>}
       */
    CameraPreviewThink.prototype.switchCamera = /**
       * Switch from the rear camera and front camera, if available.
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Hide the camera preview box.
     * @return {Promise<any>}
     */
    /**
       * Hide the camera preview box.
       * @return {Promise<any>}
       */
    CameraPreviewThink.prototype.hide = /**
       * Hide the camera preview box.
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Show the camera preview box.
     * @return {Promise<any>}
     */
    /**
       * Show the camera preview box.
       * @return {Promise<any>}
       */
    CameraPreviewThink.prototype.show = /**
       * Show the camera preview box.
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Take the picture (base64)
     * @param {CameraPreviewPictureOptions} [options] size and quality of the picture to take
     * @return {Promise<any>}
     */
    /**
       * Take the picture (base64)
       * @param {CameraPreviewPictureOptions} [options] size and quality of the picture to take
       * @return {Promise<any>}
       */
    CameraPreviewThink.prototype.takePicture = /**
       * Take the picture (base64)
       * @param {CameraPreviewPictureOptions} [options] size and quality of the picture to take
       * @return {Promise<any>}
       */
    function (options) {
        return;
    };
    /**
     *
     * Set camera color effect.
     * @static
     * @param {string} effect name : 'none' (iOS & Android), 'aqua' (Android), 'blackboard' (Android), 'mono' (iOS & Android), 'negative' (iOS & Android), 'posterize' (iOS & Android), 'sepia' (iOS & Android), 'solarize' (Android) or 'whiteboard' (Android)
     * @return {Promise<any>}
     */
    /**
       *
       * Set camera color effect.
       * @static
       * @param {string} effect name : 'none' (iOS & Android), 'aqua' (Android), 'blackboard' (Android), 'mono' (iOS & Android), 'negative' (iOS & Android), 'posterize' (iOS & Android), 'sepia' (iOS & Android), 'solarize' (Android) or 'whiteboard' (Android)
       * @return {Promise<any>}
       */
    CameraPreviewThink.prototype.setColorEffect = /**
       *
       * Set camera color effect.
       * @static
       * @param {string} effect name : 'none' (iOS & Android), 'aqua' (Android), 'blackboard' (Android), 'mono' (iOS & Android), 'negative' (iOS & Android), 'posterize' (iOS & Android), 'sepia' (iOS & Android), 'solarize' (Android) or 'whiteboard' (Android)
       * @return {Promise<any>}
       */
    function (effect) {
        return;
    };
    /**
     * Set the zoom (Android)
     * @param [zoom] {number} Zoom value
     * @return {Promise<any>}
     */
    /**
       * Set the zoom (Android)
       * @param [zoom] {number} Zoom value
       * @return {Promise<any>}
       */
    CameraPreviewThink.prototype.setZoom = /**
       * Set the zoom (Android)
       * @param [zoom] {number} Zoom value
       * @return {Promise<any>}
       */
    function (zoom) {
        return;
    };
    /**
     * Get the maximum zoom (Android)
     * @return {Promise<any>}
     */
    /**
       * Get the maximum zoom (Android)
       * @return {Promise<any>}
       */
    CameraPreviewThink.prototype.getMaxZoom = /**
       * Get the maximum zoom (Android)
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Get current zoom (Android)
     * @return {Promise<any>}
     */
    /**
       * Get current zoom (Android)
       * @return {Promise<any>}
       */
    CameraPreviewThink.prototype.getZoom = /**
       * Get current zoom (Android)
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Set the preview Size
     * @param {CameraPreviewDimensions} [dimensions]
     * @return {Promise<any>}
     */
    /**
       * Set the preview Size
       * @param {CameraPreviewDimensions} [dimensions]
       * @return {Promise<any>}
       */
    CameraPreviewThink.prototype.setPreviewSize = /**
       * Set the preview Size
       * @param {CameraPreviewDimensions} [dimensions]
       * @return {Promise<any>}
       */
    function (dimensions) {
        return;
    };
    /**
     * Get focus mode
     * @return {Promise<any>}
     */
    /**
       * Get focus mode
       * @return {Promise<any>}
       */
    CameraPreviewThink.prototype.getFocusMode = /**
       * Get focus mode
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Set the focus mode
     * @param {string} [focusMode] 'fixed', 'auto', 'continuous-picture', 'continuous-video' (iOS & Android), 'edof', 'infinity', 'macro' (Android Only)
     * @return {Promise<any>}
     */
    /**
       * Set the focus mode
       * @param {string} [focusMode] 'fixed', 'auto', 'continuous-picture', 'continuous-video' (iOS & Android), 'edof', 'infinity', 'macro' (Android Only)
       * @return {Promise<any>}
       */
    CameraPreviewThink.prototype.setFocusMode = /**
       * Set the focus mode
       * @param {string} [focusMode] 'fixed', 'auto', 'continuous-picture', 'continuous-video' (iOS & Android), 'edof', 'infinity', 'macro' (Android Only)
       * @return {Promise<any>}
       */
    function (focusMode) {
        return;
    };
    /**
     * Get supported focus modes
     * @return {Promise<any>}
     */
    /**
       * Get supported focus modes
       * @return {Promise<any>}
       */
    CameraPreviewThink.prototype.getSupportedFocusModes = /**
       * Get supported focus modes
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Get the current flash mode
     * @return {Promise<any>}
     */
    /**
       * Get the current flash mode
       * @return {Promise<any>}
       */
    CameraPreviewThink.prototype.getFlashMode = /**
       * Get the current flash mode
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Set the flash mode
     * @param {string} [flashMode] 'off' (iOS & Android), 'on' (iOS & Android), 'auto' (iOS & Android), 'torch' (Android)
     * @return {Promise<any>}
     */
    /**
       * Set the flash mode
       * @param {string} [flashMode] 'off' (iOS & Android), 'on' (iOS & Android), 'auto' (iOS & Android), 'torch' (Android)
       * @return {Promise<any>}
       */
    CameraPreviewThink.prototype.setFlashMode = /**
       * Set the flash mode
       * @param {string} [flashMode] 'off' (iOS & Android), 'on' (iOS & Android), 'auto' (iOS & Android), 'torch' (Android)
       * @return {Promise<any>}
       */
    function (flashMode) {
        return;
    };
    /**
     * Get supported flash modes
     * @return {Promise<any>}
     */
    /**
       * Get supported flash modes
       * @return {Promise<any>}
       */
    CameraPreviewThink.prototype.getSupportedFlashModes = /**
       * Get supported flash modes
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Get supported picture sizes
     * @return {Promise<any>}
     */
    /**
       * Get supported picture sizes
       * @return {Promise<any>}
       */
    CameraPreviewThink.prototype.getSupportedPictureSizes = /**
       * Get supported picture sizes
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Get exposure mode
     * @return {Promise<any>}
     */
    /**
       * Get exposure mode
       * @return {Promise<any>}
       */
    CameraPreviewThink.prototype.getExposureMode = /**
       * Get exposure mode
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Get exposure modes
     * @return {Promise<any>}
     */
    /**
       * Get exposure modes
       * @return {Promise<any>}
       */
    CameraPreviewThink.prototype.getExposureModes = /**
       * Get exposure modes
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Set exposure mode
     * @param {string} [lock]
     * @return {Promise<any>}
     */
    /**
       * Set exposure mode
       * @param {string} [lock]
       * @return {Promise<any>}
       */
    CameraPreviewThink.prototype.setExposureMode = /**
       * Set exposure mode
       * @param {string} [lock]
       * @return {Promise<any>}
       */
    function (lock) {
        return;
    };
    /**
     * Get exposure compensation (Android)
     * @return {Promise<any>}
     */
    /**
       * Get exposure compensation (Android)
       * @return {Promise<any>}
       */
    CameraPreviewThink.prototype.getExposureCompensation = /**
       * Get exposure compensation (Android)
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Set exposure compensation (Android)
     * @param {number} [exposureCompensation]
     * @return {Promise<any>}
     */
    /**
       * Set exposure compensation (Android)
       * @param {number} [exposureCompensation]
       * @return {Promise<any>}
       */
    CameraPreviewThink.prototype.setExposureCompensation = /**
       * Set exposure compensation (Android)
       * @param {number} [exposureCompensation]
       * @return {Promise<any>}
       */
    function (exposureCompensation) {
        return;
    };
    /**
     * Get exposure compensation range (Android)
     * @return {Promise<any>}
     */
    /**
       * Get exposure compensation range (Android)
       * @return {Promise<any>}
       */
    CameraPreviewThink.prototype.getExposureCompensationRange = /**
       * Get exposure compensation range (Android)
       * @return {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Set specific focus point. Note, this assumes the camera is full-screen.
     * @param {number} xPoint
     * @param {number} yPoint
     * @return {Promise<any>}
     */
    /**
       * Set specific focus point. Note, this assumes the camera is full-screen.
       * @param {number} xPoint
       * @param {number} yPoint
       * @return {Promise<any>}
       */
    CameraPreviewThink.prototype.tapToFocus = /**
       * Set specific focus point. Note, this assumes the camera is full-screen.
       * @param {number} xPoint
       * @param {number} yPoint
       * @return {Promise<any>}
       */
    function (xPoint, yPoint) {
        return;
    };
    /**
     * Add a listener for the back event for the preview
     * @return {Promise<any>} if back button pressed
     */
    /**
       * Add a listener for the back event for the preview
       * @return {Promise<any>} if back button pressed
       */
    CameraPreviewThink.prototype.onBackButton = /**
       * Add a listener for the back event for the preview
       * @return {Promise<any>} if back button pressed
       */
    function () {
        return;
    };
    CameraPreviewThink.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova({
            successIndex: 1,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "startCamera", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "stopCamera", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "switchCamera", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "hide", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "show", null);
    __decorate([
        Cordova({
            successIndex: 1,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "takePicture", null);
    __decorate([
        Cordova({
            successIndex: 1,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "setColorEffect", null);
    __decorate([
        Cordova({
            successIndex: 1,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "setZoom", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "getMaxZoom", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "getZoom", null);
    __decorate([
        Cordova({
            successIndex: 1,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "setPreviewSize", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "getFocusMode", null);
    __decorate([
        Cordova({
            successIndex: 1,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "setFocusMode", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "getSupportedFocusModes", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "getFlashMode", null);
    __decorate([
        Cordova({
            successIndex: 1,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "setFlashMode", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "getSupportedFlashModes", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "getSupportedPictureSizes", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "getExposureMode", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "getExposureModes", null);
    __decorate([
        Cordova({
            successIndex: 1,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "setExposureMode", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "getExposureCompensation", null);
    __decorate([
        Cordova({
            successIndex: 1,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "setExposureCompensation", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "getExposureCompensationRange", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "tapToFocus", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CameraPreviewThink.prototype, "onBackButton", null);
    /**
     * @beta
     * @name Camera Preview
     * @description
     * Showing camera preview in HTML
     *
     * Requires Cordova plugin: `https://github.com/shivam2211/cordova-plugin-camera-preview-think.git.git`. For more info, please see the [Cordova Camera Preview docs](https://github.com/shivam2211/cordova-plugin-camera-preview-think.git).
     *
     * @usage
     * ```typescript
     * import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
     *
     * constructor(private cameraPreview: CameraPreview) { }
     *
     * ...
     *
     * // camera options (Size and location). In the following example, the preview uses the rear camera and display the preview in the back of the webview
     * const cameraPreviewOpts: CameraPreviewOptions = {
     *   x: 0,
     *   y: 0,
     *   width: window.screen.width,
     *   height: window.screen.height,
     *   camera: 'rear',
     *   tapPhoto: true,
     *   previewDrag: true,
     *   toBack: true,
     *   alpha: 1
     * };
     *
     * // start camera
     * this.cameraPreview.startCamera(cameraPreviewOpts).then(
     *   (res) => {
     *     console.log(res)
     *   },
     *   (err) => {
     *     console.log(err)
     *   });
     *
     * // Set the handler to run every time we take a picture
     * this.cameraPreview.setOnPictureTakenHandler().subscribe((result) => {
     *   console.log(result);
     *   // do something with the result
     * });
     *
     *
     * // picture options
     * const pictureOpts: CameraPreviewPictureOptions = {
     *   width: 1280,
     *   height: 1280,
     *   quality: 85
     * }
     *
     * // take a picture
     * this.cameraPreview.takePicture(this.pictureOpts).then((imageData) => {
     *   this.picture = 'data:image/jpeg;base64,' + imageData;
     * }, (err) => {
     *   console.log(err);
     *   this.picture = 'assets/img/test.jpg';
     * });
     *
     *
     * // Switch camera
     * this.cameraPreview.switchCamera();
     *
     * // set color effect to negative
     * this.cameraPreview.setColorEffect('negative');
     *
     * // Stop the camera preview
     * this.cameraPreview.stopCamera();
     *
     * ```
     *
     * @interfaces
     * CameraPreviewOptions
     * CameraPreviewPictureOptions
     * CameraPreviewDimensions
     */
    CameraPreviewThink = __decorate([
        Plugin({
            pluginName: 'CameraPreviewThink',
            plugin: 'cordova-plugin-camera-preview-think',
            pluginRef: 'CameraPreviewThink',
            repo: 'https://github.com/shivam2211/cordova-plugin-camera-preview-think',
            platforms: ['Android', 'iOS']
        })
    ], CameraPreviewThink);
    return CameraPreviewThink;
}(IonicNativePlugin));
export { CameraPreviewThink };
//# sourceMappingURL=index.js.map