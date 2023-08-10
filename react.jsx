// Modalコンポーネントを定義する
// Modalコンポーネントを定義し、propsとして表示する画像のパスを受け取るようにします。

```
import React from 'react';

const Modal = ({ imagePath }) =&gt; {
  return (
    &lt;div className="modal-wrapper"&gt;
      &lt;a href="#!" className="modal-overlay"&gt;&lt;/a&gt;
      &lt;div className="modal-window"&gt;
        &lt;div className="modal-content"&gt;
          &lt;img src={imagePath} alt="" /&gt;
        &lt;/div&gt;
        &lt;a href="#!" className="modal-close"&gt;&lt;i className="far fa-times-circle"&gt;&lt;/i&gt;&lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
};

export default Modal;
```

    // Stateを定義する
    // stateを定義し、モーダルの表示状態を管理します。初期状態では、全てのモーダルは非表示とします。

    ```
import React, { useState } from 'react';
import Modal from './Modal';

const App = () =&gt; {
  const [modalOpen, setModalOpen] = useState({
    modal1: false,
    modal2: false,
    // ここに表示するモーダルの数だけ追加する
  });

  const toggleModal = (modalId) =&gt; {
    setModalOpen({ ...modalOpen, [modalId]: !modalOpen[modalId] });
  };

  return (
    &lt;div&gt;
      &lt;div&gt;
        &lt;a href="#!" className="thumbnail" onClick={() =&gt; toggleModal('modal1')}&gt;
          &lt;img src="img/paint1.jpg" alt="" /&gt;
        &lt;/a&gt;
      &lt;/div&gt;
      {modalOpen.modal1 &amp;&amp; &lt;Modal imagePath="path1.JPG" /&gt;}
      &lt;div&gt;
        &lt;a href="#!" className="thumbnail" onClick={() =&gt; toggleModal('modal2')}&gt;
          &lt;img src="img/paint2.jpg" alt="" /&gt;
        &lt;/a&gt;
      &lt;/div&gt;
      {modalOpen.modal2 &amp;&amp; &lt;Modal imagePath="path2.JPG" /&gt;}

      {/* ここに表示するモーダルの数だけ追加する */}
    &lt;/div&gt;
  );
};

export default App;
```

    // モーダルを表示するタグにonClickイベントを追加する
    // モーダルを表示したい画像のタグに、onClickイベントを追加し、toggleModal関数を呼び出します。引数には、モーダルを一意に識別するためのIDを渡します（例：'modal1'、'modal2'など）。

    ```
&lt;a href="#!" className="thumbnail" onClick={() =&gt; toggleModal('modal1')}&gt;
  &lt;img src="img/paint1.jpg" alt="" /&gt;
&lt;/a&gt;
```

    // モーダルを表示する
    // stateで管理している表示状態に従って、モーダルを表示します。

    ```
{modalOpen.modal1 &amp;&amp; &lt;Modal imagePath="path1.JPG" /&gt;}
```
