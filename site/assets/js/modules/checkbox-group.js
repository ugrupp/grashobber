function checkSetValidity(checkboxes) {
  if (checkboxes.length <= 0) return false;

  const errorMessage = checkboxes.some((checkbox) => (checkbox.checked)) ? '' : 'Wählen Sie Ihre gewünschten Medien.';
  checkboxes[0].setCustomValidity(errorMessage);
}

document.addEventListener('DOMContentLoaded', () => {
  let checkboxGroups = {};

  // group checkboxes by name
  [...document.querySelectorAll('[data-checkbox-group]')].forEach((checkbox) => {
    let checkboxGroup = checkbox.dataset.checkboxGroup;
    checkboxGroups[checkboxGroup] = checkboxGroups[checkboxGroup] || [];
    checkboxGroups[checkboxGroup].push(checkbox);
  });

  Object.values(checkboxGroups).forEach((checkboxes) => {
    const firstCheckbox = checkboxes.length > 0 ? checkboxes[0] : null;

    if (firstCheckbox) {
      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
          checkSetValidity(checkboxes);
        });
      });
      checkSetValidity(checkboxes);
    }
  });
});
