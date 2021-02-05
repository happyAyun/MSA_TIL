FROM ubuntu
RUN apt-get update && apt-get install -y nodejs

ADD app.js /app.js 
ENTRYPOINT ["node", "app.js"]
# 노드를 기반으로, 루트 경로로 추가하여, app.js를 시작점으로 하겠다. 
