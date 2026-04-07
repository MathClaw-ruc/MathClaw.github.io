import DefaultTheme from "vitepress/theme";
import { onBeforeUnmount, onMounted, watch } from "vue";
import { useRoute } from "vitepress";
import "./custom.css";

function syncSearchCopy() {
  if (typeof document === "undefined") return;

  const button = document.querySelector(".DocSearch-Button");
  const placeholder = document.querySelector(".DocSearch-Button-Placeholder");

  if (button instanceof HTMLButtonElement) {
    button.setAttribute("aria-label", "搜索");
    button.title = "搜索";
  }

  if (placeholder instanceof HTMLElement && placeholder.textContent !== "搜索") {
    placeholder.textContent = "搜索";
  }
}

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute();
    let observer: MutationObserver | undefined;

    onMounted(() => {
      syncSearchCopy();
      observer = new MutationObserver(() => syncSearchCopy());
      observer.observe(document.body, { childList: true, subtree: true });
    });

    watch(
      () => route.path,
      () => {
        requestAnimationFrame(() => syncSearchCopy());
      }
    );

    onBeforeUnmount(() => observer?.disconnect());
  }
};
