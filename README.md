Here is the revised version of the content, with both the English and Japanese sections in the table of contents and body:

---

[![Build and Test Ironuki](https://github.com/kazuma-naka/ironuki-gui/actions/workflows/build.yml/badge.svg)](https://github.com/kazuma-naka/ironuki-gui/actions/workflows/build.yml) ![Version](https://img.shields.io/github/package-json/v/kazuma-naka/ironuki-gui) ![License](https://img.shields.io/github/license/kazuma-naka/ironuki-gui) ![Downloads](https://img.shields.io/github/downloads/kazuma-naka/ironuki-gui/total) ![Platform Support](https://img.shields.io/badge/platform-Linux%20|%20Windows%20|%20macOS-blue) ![Node.js](https://img.shields.io/badge/node-%3E=20.11.0-brightgreen) ![Electron Version](https://img.shields.io/badge/electron-v30.5.1-blue) ![GitHub Stars](https://img.shields.io/github/stars/kazuma-naka/ironuki-gui)

# Ironuki-GUI

![demo gif](demo/ironuki-gui-demo.gif)

**Ironuki-GUI** is a simple, minimalist GUI application for capturing the color under the mouse cursor and copying it to the clipboard in hex format. The app is designed to be lightweight and easy to use, with a clean and modern interface.

## Table of Contents / 目次

1. [Features](#features) / [機能](#機能)
2. [Dependencies](#dependencies) / [依存関係](#依存関係)
3. [Installation](#installation) / [インストール](#インストール)
4. [Usage](#usage) / [使用方法](#使用方法)
5. [Prerequisites](#prerequisites) / [前提条件](#前提条件)
6. [License](#license) / [ライセンス](#ライセンス)
7. [Contributing](#contributing) / [貢献](#貢献)
8. [Acknowledgments](#acknowledgments) / [謝辞](#謝辞)

## Features

- Capture the color under your mouse cursor
- Copy the captured color in hex format to the clipboard
- Display the color and its corresponding hex code in the GUI
- Keyboard shortcuts to control capturing:
  - `Ctrl+Shift+P` to pause capturing
  - `Ctrl+Shift+S` to start capturing
- Responsive design that resizes based on window dimensions
- Simple and minimalist UI

## Dependencies

This project uses the following key libraries:

- [robotjs](https://www.npmjs.com/package/robotjs): Used for precise mouse tracking and capturing the position of the cursor.
- [screenshot-desktop](https://www.npmjs.com/package/screenshot-desktop): Captures the screen in real-time to retrieve color information.
- [pngjs](https://www.npmjs.com/package/pngjs): Processes the captured screenshots to extract the hex color under the cursor.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/kazuma-naka/ironuki-gui.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ironuki-gui
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   npm start
   ```

## Usage

1. Launch the app.
2. The app window will show the current color under your mouse cursor.
3. Click anywhere within the window to copy the hex color code to your clipboard.
4. The app will display a toast notification confirming that the color has been copied.
5. Use `Ctrl+Shift+P` to pause color capturing, and `Ctrl+Shift+S` to start capturing again.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Electron](https://www.electronjs.org/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or bugs.

## Acknowledgments

- Built using [Electron](https://www.electronjs.org/).
- Uses [robotjs](https://www.npmjs.com/package/robotjs) for mouse tracking, [screenshot-desktop](https://www.npmjs.com/package/screenshot-desktop) for screen capture, and [pngjs](https://www.npmjs.com/package/pngjs) for image processing.

---

## 謝辞

- このアプリは[Electron](https://www.electronjs.org/)を使用して構築されています。
- [robotjs](https://www.npmjs.com/package/robotjs)を使用してマウスの位置を追跡し、[screenshot-desktop](https://www.npmjs.com/package/screenshot-desktop)で画面をキャプチャし、[pngjs](https://www.npmjs.com/package/pngjs)で画像処理を行っています。

---

**Ironuki-GUI**は、マウスカーソルの下にある色をキャプチャして、16進数形式でクリップボードにコピーするためのシンプルでミニマルなGUIアプリケーションです。このアプリは、軽量で使いやすく、クリーンでモダンなインターフェースを備えています。

## 機能

- マウスカーソルの下にある色をキャプチャ
- キャプチャされた色をウィンドウをクリックして16進数形式でクリップボードにコピー
- GUIに色と対応する16進数コードを表示
- キーボードショートカットでキャプチャを制御:
  - `Ctrl+Shift+P` でキャプチャを一時停止
  - `Ctrl+Shift+S` でキャプチャを再開
- ウィンドウサイズに応じて自動的にリサイズされるレスポンシブデザイン
- シンプルなUI

## 依存関係

このプロジェクトは、以下の主要なライブラリを使用しています:

- [robotjs](https://www.npmjs.com/package/robotjs): マウスの位置を正確に追跡し、カーソルの位置をキャプチャするために使用されます。
- [screenshot-desktop](https://www.npmjs.com/package/screenshot-desktop): 色情報を取得するためにリアルタイムでスクリーンをキャプチャします。
- [pngjs](https://www.npmjs.com/package/pngjs): キャプチャされたスクリーンショットを処理して、カーソルの下にある色の16進数コードを抽出します。

## インストール

1. このリポジトリをクローン:
   ```bash
   git clone https://github.com/kazuma-naka/ironuki-gui.git
   ```
2. プロジェクトディレクトリに移動:
   ```bash
   cd ironuki-gui
   ```
3. 依存関係をインストール:
   ```bash
   npm install
   ```
4. アプリケーションを実行:
   ```bash
   npm start
   ```

## 使用方法

1. アプリを起動します。
2. アプリウィンドウには、現在のマウスカーソルの下にある色が表示されます。
3. ウィンドウ内の任意の場所をクリックすると、16進数形式のカラーコードがクリップボードにコピーされます。
4. 色がコピーされたことを確認するトースト通知が表示されます。
5. `Ctrl+Shift+P` でキャプチャを一時停止し、`Ctrl+Shift+S` で再開できます。

## 前提条件

- [Node.js](https://nodejs.org/)
- [Electron](https://www.electronjs.org/)

## ライセンス

このプロジェクトはMITライセンスの下でライセンスされています。詳細は[LICENSE](LICENSE)ファイルをご覧ください。

## Contribution

Contribution は大歓迎です！ご提案やバグ報告について、プルリクエストの提出や Issue の作成を気軽に行ってください。
