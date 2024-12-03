(function() {
    // Modal stili
    const style = `
        #authModal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        #authForm {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            text-align: center;
            width: 300px;
        }
        #authForm input {
            width: 90%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        #authForm button {
            padding: 10px 20px;
            border: none;
            background: #007BFF;
            color: white;
            border-radius: 5px;
            cursor: pointer;
        }
        #authForm button:hover {
            background: #0056b3;
        }
    `;

    // Stil ekle
    const styleEl = document.createElement('style');
    styleEl.textContent = style;
    document.head.appendChild(styleEl);

    // Modal oluştur
    const modal = document.createElement('div');
    modal.id = 'authModal';
    modal.innerHTML = `
        <div id="authForm">
            <h3>Authentication Required</h3>
            <input type="text" id="username" placeholder="Username">
            <input type="password" id="password" placeholder="Password">
            <button id="submitAuth">Login</button>
        </div>
    `;
    document.body.appendChild(modal);

    // Giriş butonuna olay bağlama
    document.getElementById('submitAuth').addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verileri gönder veya işlem yap (PoC için konsola yazdır)
        console.log(`Username: ${username}, Password: ${password}`);

        // Modalı kaldır
        document.body.removeChild(modal);
    });
})();
