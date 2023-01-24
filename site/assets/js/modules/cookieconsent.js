import 'cookieconsent';

window.addEventListener('load', () => {
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background":
          "#92c01a",
        "text":
          "#ffffff"
      },
      "button": {
        "background":
          "#ffffff",
        "text":
          "#92c01a"
      }
    },
    "position": "bottom-left",
    "content": {
      "message": "Wir verwenden Cookies. Durch die weitere Nutzung unserer Website stimmen Sie der Verwendung dieser Cookies zu.",
      "dismiss": "Verstanden",
      "link": "Mehr erfahren?",
      "href": "https://grashobber.de/datenschutz/"
    }
  });
});
