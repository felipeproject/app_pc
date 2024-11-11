import webview

# URL do arquivo HTML no GitHub Pages
html_url = "https://felipeproject.github.io/app_pc/"

# Cria e exibe a janela do WebView com a URL do HTML
webview.create_window(
    "Portal do Clã", 
    html_url, 
    width=800, 
    height=600, 
    resizable=True
)

# Inicia o aplicativo WebView
webview.start()
