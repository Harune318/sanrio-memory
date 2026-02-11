function showTab(tab, btn) {
  const content = document.getElementById("content");

  document.querySelectorAll(".bottom-nav button").forEach(b => {
    b.classList.remove("active");
  });

  btn.classList.add("active");

if (tab === "chat") {
  content.innerHTML = `
    <div class="chat-wrapper">
      <img src="images/B01.png" class="chat-bg">
      <textarea class="chat-input" placeholder="メッセージを入力..."></textarea>
    </div>
  `;
}



if (tab === "photo") {
  content.innerHTML = `
    <img src="images/B02.png" style="width:100%; cursor:pointer;" id="photoTrigger">
    <input type="file" accept="image/*" capture="environment" id="cameraInput" style="display:none">
  `;

  document.getElementById("photoTrigger").onclick = function() {
    document.getElementById("cameraInput").click();
  };

  document.getElementById("cameraInput").onchange = function() {
    content.innerHTML = `
      <img src="images/B03-1.png" style="width:100%">
      <img src="images/B03-2.png" style="width:100%">
      <img src="images/B03-3.png" style="width:100%">
    `;
  };
}

if (tab === "share") {
  content.innerHTML = `
    <div class="share-wrapper">

      <!-- 上部（＋ボタン） -->
      <div class="share-section">
        <img src="images/B04-1.png" class="share-bg">
        <a href="album-create.html" class="share-link plus"></a>
      </div>

      <!-- 下部（アルバム群） -->
      <div class="album-area">
        <img src="images/B04-2.png" class="share-bg">

        <a href="album01.html" class="share-link album1"></a>
        <a href="album02.html" class="share-link album2"></a>
        <a href="album03.html" class="share-link album3"></a>
        <a href="album04.html" class="share-link album4"></a>
        <a href="album05.html" class="share-link album5"></a>
        <a href="album06.html" class="share-link album6"></a>
        <a href="album07.html" class="share-link album7"></a>
        <a href="album08.html" class="share-link album8"></a>
        <a href="album09.html" class="share-link album9"></a>

      </div>

    </div>
  `;
}




if (tab === "gift") {
  content.innerHTML = `
    <div class="gift-screen">
      <button class="gift-main-btn" id="cardBtn">
        グリーティングカードを贈る
      </button>

      <button class="gift-main-btn" id="giftBtn">
        ギフトを贈る
      </button>
    </div>
  `;

document.getElementById("cardBtn").onclick = function() {
  content.innerHTML = `
    <div id="cardSelectScreen">
      <img src="images/card-select.jpg" style="width:100%;">
    </div>
  `;

  document.getElementById("cardSelectScreen").onclick = function() {
    showCardEditScreen();
  };
};

function showCardEditScreen() {
  const content = document.getElementById("content");

  content.innerHTML = `
    <div id="cardEditScreen">
      <img src="images/card-edit.jpg" style="width:100%;">
    </div>
  `;
}

  document.getElementById("giftBtn").onclick = function() {
    location.href = "gift-select.html";
  };
}



  if (tab === "profile") {
    content.innerHTML = `
      <p>自分が共有したアルバム</p>
      <p>贈ったギフト</p>
      <p>もらったギフト</p>
    `;
  }
}
