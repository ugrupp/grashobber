/**
 * Konnekt form handler
 * Sends form data to the grashobber API
 */

const initKonnektForm = () => {
  const form = document.querySelector("[data-konnekt-form]");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get submit button
    const submitBtn = form.querySelector('button[type="submit"]');

    // Set loading state
    submitBtn.disabled = true;

    // Collect form data
    const formData = new FormData(form);

    const payload = {
      newPerson: {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        gender: formData.get("gender"),
      },
      currentEmployer: [
        formData.get("currentEmployerCompany"),
        formData.get("currentEmployerPosition"),
      ]
        .filter(Boolean)
        .join(", "),
      personAlreadyInSystem: false,
      state: "Arrived",
      arrivedDate: new Date().toISOString().split("T")[0],
      companyId: 6,
      startDeletionDeadlineOnApplicationCancelled: false,
      assignedManagerIds: [],
    };

    try {
      const response = await fetch(
        "/.netlify/functions/konnekt-submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      // Success
      const messageEl = document.querySelector("[data-konnekt-message]");

      messageEl.textContent = messageEl.dataset.success;
      messageEl.classList.remove("is-error");
      messageEl.classList.add("is-success");
      messageEl.style.display = "inline-block";

      submitBtn.style.display = "none";
      form.reset();
    } catch (error) {
      const messageEl = document.querySelector("[data-konnekt-message]");
      messageEl.textContent = messageEl.dataset.error;
      messageEl.classList.remove("is-success");
      messageEl.classList.add("is-error");
      messageEl.style.display = "inline-block";

      // Reset button on error
      submitBtn.disabled = false;
    }
  });
};

document.addEventListener("DOMContentLoaded", initKonnektForm);
