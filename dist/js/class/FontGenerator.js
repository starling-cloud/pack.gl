"use strict";
// class/FontGenerator.ts
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright 2023 Scape Agency BV
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ============================================================================
// Import
// ============================================================================
var fantasticon_1 = require("fantasticon");
// ============================================================================
// Classes
// ============================================================================
class FontGenerator {
    async generateFonts(sourceDirectory, outputDiectory) {
        const config = {
            // RunnerMandatoryOptions
            inputDir: sourceDirectory, // (required)
            outputDir: outputDiectory, // (required)
            // RunnerOptionalOptions
            name: 'icon.gl',
            fontTypes: [
                fantasticon_1.FontAssetType.TTF, // TTF = "ttf"
                fantasticon_1.FontAssetType.WOFF, // WOFF = "woff"
                fantasticon_1.FontAssetType.WOFF2, // WOFF2 = "woff2"
                fantasticon_1.FontAssetType.EOT, // EOT = "eot"
                fantasticon_1.FontAssetType.SVG, // SVG = "svg"
            ],
            assetTypes: [
                fantasticon_1.OtherAssetType.CSS, // CSS = "css",
                fantasticon_1.OtherAssetType.SCSS, // SCSS = "scss",
                fantasticon_1.OtherAssetType.SASS, // SASS = "sass",
                fantasticon_1.OtherAssetType.HTML, // HTML = "html",
                fantasticon_1.OtherAssetType.JSON, // JSON = "json",
                fantasticon_1.OtherAssetType.TS, // TS = "ts"    
            ],
            formatOptions: {
                // woff: {
                //   // Woff Extended Metadata Block - see https://www.w3.org/TR/WOFF/#Metadata
                //   metadata: '...'
                // },
                // ttf?: TtfOptions; // type TtfOptions = svg2ttf.FontOptions;
                // svg?: SvgOptions;  // type SvgOptions = Omit<SvgIcons2FontOptions, 'fontName' | 'fontHeight' | 'descent' | 'normalize'>;
                json: { indent: 4 }
            },
            pathOptions: {
                json: './dist/font/icon.gl.json',
                css: './dist/font/icon.gl.css',
                scss: './dist/font/icon.gl.scss',
                woff: './dist/font/icon.gl.woff',
                woff2: './dist/font/icon.gl.woff2'
            },
            // codepoints: {
            //     'chevron-left':     57344, // decimal representation of 0xe000
            //     'chevron-right':    57345,
            //     'thumbs-up':        57358,
            //     'thumbs-down':      57359,
            // },
            // fontHeight: number;
            // descent: number;
            // normalize: boolean;
            // round: number;
            selector: '.igl',
            // tag: string;
            // Use our custom Handlebars templates
            // templates: {
            //     css: './build/font/icon.gl.css.hbs',
            //     scss: './build/font/icon.gl.scss.hbs'
            // }, 
            prefix: 'igl',
            fontsUrl: './fonts'
        };
        try {
            await (0, fantasticon_1.generateFonts)(config);
            console.log('Fonts generated successfully.');
        }
        catch (error) {
            console.error('Error generating fonts:', error);
        }
    }
}
// ============================================================================
// Export
// ============================================================================
exports.default = FontGenerator;
