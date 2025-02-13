<div align="center">

# A Website : Alan's World

## <a href="https://flask-app-910273823562.asia-east1.run.app/"><strong><p style="color:blue">Live Demo</p></strong></a> 
 
</div>

<hr>

<table>
<tr>
<td width="40%">
<img src="gif/website_phoneview.gif" width="300" alt="Demo GIF">
</td>
<td width="60%">

## 技術介紹📌
 
### 前端  
- 由 HTML、CSS、JavaScript 構成，支援 RWD (響應式設計)，確保桌機與手機能夠正常瀏覽。  
- 在 CSS 使用 Media Queries 確保手機與桌機排版正確。  
- 透過 Fetch API 發送 JSON 格式的 POST 請求到 Flask。  

### 後端  
- 使用 Python + Flask，負責處理使用者提交的表單，並發送 Email 確認通知。  

### Docker  
- 透過 Docker 打包 Flask 應用程式，確保在任何環境下都能運行。  
- 在專案目錄建立 Dockerfile，打包並上傳至 DockerHub (為後續 K8s 做準備)。  

### Kubernetes 部署 (GKE)  
- 透過 Kubernetes 來管理 Flask 容器，並部署到 Google Kubernetes Engine (GKE)。  
- 撰寫 `deployment.yaml` 和 `service.yaml`。  
- 在 Service type 選擇 `LoadBalancer`，並透過 GKE 提供一個外部 IP。  

</td>
</tr>
</table>

