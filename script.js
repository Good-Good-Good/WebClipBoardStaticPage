$(document).ready(() => {
  const tabs = $('#mainTabs > ul > li').get();
  const tabPages = $('.tabPage').get();

  init();

  function init() {
    tabs.forEach((tab, idx) => {
      $(tab).click(() => {
        setTabMenu(idx)
      });
    });

    setTabMenu(0);
  }

  function setTabMenu(idx) {
    tabs.forEach((tabToActive, activeIdx) => {
      if (idx == activeIdx) {
        $(tabToActive).addClass('is-active');
      } else {
        $(tabToActive).removeClass('is-active');
      }
    });

    tabPages.forEach((pageToShow, pageIdx) => {
      if (idx == pageIdx) {
        $(pageToShow).show();
      } else {
        $(pageToShow).hide();
      }
    });
  };

});

