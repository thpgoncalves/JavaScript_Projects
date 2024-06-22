import { Router } from "./router.js"
import { Backgrounds } from "./events.js";
import { bgHome, bgUniverse, bgExploration } from "./elements.js";

const backgrounds = Backgrounds({
  bgHome,
  bgUniverse,
  bgExploration,
});

if (bgHome) {
  bgHome.addEventListener("click", function () {
    backgrounds.backgroundHome();
  });
}

if (bgUniverse) {
  bgUniverse.addEventListener("click", function () {
    backgrounds.backgroundUniverse();
  });
}

if (bgExploration) {
  bgExploration.addEventListener("click", function () {
    backgrounds.backgroundExploration();
  });
}

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/exploration", "/pages/exploration.html")
router.add("/universe", "/pages/universe.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle();

window.route = () => router.route()
