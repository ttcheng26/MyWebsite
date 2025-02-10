<div align="center">

# A Website : Alan's World

## <a href="http://35.234.44.229/"><strong><p style="color:blue">Live Demo</p></strong></a> 
 
</div>

<hr>

<div style="display: flex; align-items: flex-start;">
  <img src="gif/website_phoneview.gif" width="300" alt="Demo GIF" style="margin-right: 20px;">
  <div>
    <h2>技術介紹📌</h2>
        <h3>前端</h3>
        <ul>
            <li>由 HTML、CSS、JavaScript 構成，支援 RWD (響應式設計)，確保桌機與手機能夠正常瀏覽。</li>
            <li>在CSS使用Media Queries 確保手機與桌機排版正確。</li>
            <li>透過 Fetch API 發送 JSON 格式的 POST 請求到 Flask</li>
        </ul>
        <h3>後端</h3>
        <ul>
            <li>使用 Python + Flask，負責處理使用者提交的表單，並發送 Email 確認通知。</li>
        </ul>
        <h3>Docker</h3>
        <ul>
            <li>透過 Docker 打包 Flask 應用程式，確保在任何環境下都能運行。</li>
            <li>在專案目錄建立Dockerfile，打包並上傳至DockerHub(為後續K8s做準備)</li>
        </ul>
        <h3>Kubernetes 部署 (GKE)</h3>
        <ul>
            <li>透過 Kubernetes 來管理 Flask 容器，並部署到 Google Kubernetes Engine (GKE)。</li>
            <li>撰寫deployment.yaml 和 service.yaml</li>
            <li>在service type選擇LoadBalancer並透過GKE提供一個外部IP</li>
        </ul>
  </div>
</div>

