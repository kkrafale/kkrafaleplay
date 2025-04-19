<!-- Firebase SDKs -->
<script type="module">
  // Importação dos módulos necessários do Firebase v9+
  import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
  import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';
  import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

  // Configuração do Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCDkcb6Qf5gWANhViBd4ENhOW4ibYxOsKA",
    authDomain: "kkrafale-lab.firebaseapp.com",
    databaseURL: "https://kkrafale-lab-default-rtdb.firebaseio.com",
    projectId: "kkrafale-lab",
    storageBucket: "kkrafale-lab.firebasestorage.app",
    messagingSenderId: "207958605538",
    appId: "1:207958605538:web:9faa6916295617e1b228bb",
    measurementId: "G-H0Q56BHFYJ"
  };

  // Inicializando o Firebase
  const app = initializeApp(firebaseConfig);

  // Pegando instâncias de banco de dados e autenticação
  const db = getDatabase(app);
  const auth = getAuth(app);

  // Agora você pode usar 'db' e 'auth' em outras partes do seu código
</script>
