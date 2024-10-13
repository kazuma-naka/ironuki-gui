import screenshot from "screenshot-desktop";
import { PNG } from "pngjs";
import robot from "robotjs";

export class ColorCapture {
  async getColorUnderMouse() {
    const mousePos = robot.getMousePos();
    const screenSize = robot.getScreenSize();

    try {
      const imgBuffer = await screenshot({ format: "png", screen: "" });
      const png = PNG.sync.read(imgBuffer);
      const scaledMouseX = Math.floor(
        mousePos.x * (png.width / screenSize.width),
      );
      const scaledMouseY = Math.floor(
        mousePos.y * (png.height / screenSize.height),
      );

      const idx = (scaledMouseY * png.width + scaledMouseX) * 4;
      const red = png.data[idx];
      const green = png.data[idx + 1];
      const blue = png.data[idx + 2];

      const hex = this.rgbToHex(red, green, blue);
      return { hex, x: mousePos.x, y: mousePos.y };
    } catch (error) {
      console.error("Error capturing screenshot or processing image:", error);
    }
  }

  rgbToHex(r, g, b) {
    return [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
  }
}
