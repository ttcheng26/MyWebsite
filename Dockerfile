# 使用 Python 3.9 作為基礎映像
FROM python:3.9

# 設定工作目錄
WORKDIR /app

# 複製專案所有檔案到容器內
COPY . .

# 安裝 Flask 和相依套件
RUN pip install --no-cache-dir -r requirements.txt

# 設定 Flask 執行環境變數
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=8080

# 確保容器開放 Cloud Run 預設的 8080 端口
EXPOSE 8080

# 使用明確的 Python 指令啟動 Flask
CMD ["python", "app.py"]

