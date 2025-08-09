FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
# Expose port used by flask app
EXPOSE 5000
CMD ["python", "app.py"]
