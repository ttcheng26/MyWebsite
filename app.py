import os
from flask import Flask, request, jsonify, render_template
from flask_mail import Mail, Message
from flask_cors import CORS
from dotenv import load_dotenv

# 載入 `.env` 變數
load_dotenv()

# 設定 Flask，並確保能夠正確讀取 templates/ 和 assets/
app = Flask(__name__, template_folder="templates", static_folder="assets")
CORS(app)

# 設定 Flask-Mail（使用 Gmail SMTP）
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv("MAIL_USERNAME")
app.config['MAIL_PASSWORD'] = os.getenv("MAIL_PASSWORD")

mail = Mail(app)

# **提供 `index.html`**
@app.route('/')
def home():
    return render_template('index.html')  # 這樣 Flask 會從 `templates/` 讀取 `index.html`

# **表單提交 API**
@app.route('/submit_form', methods=['POST'])
def submit_form():
    try:
        data = request.json
        fullname = data.get('fullname')
        email = data.get('email')
        message = data.get('message')

        # 發送 Email 到你的 Gmail
        msg = Message("New Contact Form Submission",
                      sender=f"{fullname} <{app.config['MAIL_USERNAME']}>",
                      recipients=["alan870205@gmail.com"])
        msg.body = f"Name: {fullname}\nEmail: {email}\nMessage: {message}"
        msg.reply_to = email
        mail.send(msg)

        return jsonify({"status": "success", "message": "Email sent successfully! ✅"})
    
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 8080))  # ✅ 確保 Flask 監聽 Cloud Run 端口
    app.run(debug=True, host="0.0.0.0", port=port)
