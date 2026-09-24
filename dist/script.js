// Substitua pelo link real do checkout quando ele estiver disponível.
const CHECKOUT_URL = "#";

document.querySelectorAll("[data-offer-link]").forEach((cta) => {
  cta.href = "#oferta";
});

document.querySelectorAll("[data-checkout]").forEach((cta) => {
  cta.href = CHECKOUT_URL;
});

const faqItems = [...document.querySelectorAll(".faq-item")];

function closeFaqItem(item) {
  const button = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  item.dataset.open = "false";
  button.setAttribute("aria-expanded", "false");
  answer.setAttribute("aria-hidden", "true");
}

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  button.addEventListener("click", () => {
    const willOpen = button.getAttribute("aria-expanded") !== "true";

    faqItems.forEach((faqItem) => closeFaqItem(faqItem));

    if (willOpen) {
      item.dataset.open = "true";
      button.setAttribute("aria-expanded", "true");
      answer.setAttribute("aria-hidden", "false");
    }
  });
});
