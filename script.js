$(document).ready(() => {
  const tabs = $('#mainTabs > ul > li').get()
  const tabPages = $('.tabPage').get()
  let userName

  // 탭 설정
  tabs.forEach((tab, idx) => {
    $(tab).click(() => {
      setTabMenu(idx)
    });
  });

  setTabMenu(0);

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

  // 텍스트 공유 탭
  $('#textShareBtn').click(() => {
    const text = $('#textShareInput').val()
    console.log(text)
  })

  // 최근 기록 탭

  // 파일 공유 탭
  $('#fileShareInput').change(() => {
    const fileName = $('#fileShareInput')[0].files[0].name
    $('#fileShareFileName').text(fileName)
  })

  $('#fileShareBtn').click(() => {
    // TODO upload file
  })


  // 설정 탭
  setUserName($.cookie('name') || '')
  $('#nameSettingInput').val(userName)

  $('#nameSettingBtn').click(() => {
    const name = $('#nameSettingInput').val().trim()

    if (name) {
      setUserName(name)
      alert("이름이 설정되었습니다")
    }
  })

  function setUserName(name) {
    userName = name
    $.cookie('name', name, { expires: 90 })
    $('.userNameTextBox').get().forEach(textBox => {
      $(textBox).val(name)
    })
  }


})

