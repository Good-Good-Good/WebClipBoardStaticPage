$(document).ready(() => {
  const tabs = $('#mainTabs > ul > li').get()
  const tabPages = $('.tabPage').get()
  let userName;

  // 탭 설정
  tabs.forEach((tab, idx) => {
    $(tab).click(() => {
      setTabMenu(idx)
    });
  });

  setTabMenu(3);

  function setTabMenu(idx) {
    tabs.forEach((tabToActive, activeIdx) => {
      if (idx == activeIdx) {
        $(tabToActive).addClass('is-active')
      } else {
        $(tabToActive).removeClass('is-active')
      }
    });

    tabPages.forEach((pageToShow, pageIdx) => {
      if (idx == pageIdx) {
        $(pageToShow).show()
      } else {
        $(pageToShow).hide()
      }
    });
  };

  // 설정 탭
  setUserName($.cookie('name') || '')
  $('#nameSettingInput').val(userName)

  $('#nameSettingBtn').click(() => {
    const name = $('#nameSettingInput').val().trim()

    if (name) {
      setUserName(name)
    }
  });

  function setUserName(name) {
    userName = name
    $.cookie('name', name, { expires: 90 })
    $('.userNameTextBox').get().forEach(textBox => {
      $(textBox).val(name)
    })
  }


});

