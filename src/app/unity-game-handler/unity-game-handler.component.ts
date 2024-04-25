import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-unity-game-handler',
  templateUrl: './unity-game-handler.component.html',
  styleUrls: ['./unity-game-handler.component.css']
})
export class UnityGameHandlerComponent implements AfterViewInit{
  ngAfterViewInit(): void {

    const script = document.createElement('script');
    script.src = "assets/dune_io/Build/unity.loader.js";
    script.onload = (ev) => {
      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        // Mobile device style: fill the whole browser client area with the game canvas:
        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
        document.getElementsByTagName('head')[0].appendChild(meta);

        const canvas = document.querySelector("#unity-canvas") as HTMLCanvasElement;
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.position = "fixed";

        document.body.style.textAlign = "left";
      }

      // @ts-ignore
      createUnityInstance(document.querySelector("#unity-canvas"), {
        dataUrl: "assets/dune_io/Build/unity.data",
        frameworkUrl: "assets/dune_io/Build/unity.framework.js",
        codeUrl: "assets/dune_io/Build/unity.wasm",
        streamingAssetsUrl: "assets/dune_io/StreamingAssets",
        companyName: "DefaultCompany",
        productName: "dune.io",
        productVersion: "0.1",
        // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
        // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
      });
    }
    document.body.appendChild(script);
  }
}
