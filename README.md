# DescabaGeek — Admin (Backend)

> API REST e painel de gestão de conteúdos do portal [descabageek.com](https://www.descabageek.com), construído com Strapi v5.

---

## Stack

| Camada | Tecnologia |
|---|---|
| CMS / API | Strapi v5 (Node.js) |
| Base de dados | PostgreSQL via Supabase |
| Uploads de média | Cloudinary |
| Hosting | Render |

---

## Variáveis de ambiente

Copia o `.env.example` para `.env` e preenche os valores:

```bash
cp .env.example .env
```

| Variável | Descrição |
|---|---|
| `APP_KEYS` | 4 chaves separadas por vírgula — gerar com `openssl rand -base64 16` |
| `API_TOKEN_SALT` | Salt para tokens de API |
| `ADMIN_JWT_SECRET` | Secret do JWT do painel admin |
| `TRANSFER_TOKEN_SALT` | Salt para tokens de transferência |
| `ENCRYPTION_KEY` | Chave de encriptação |
| `JWT_SECRET` | Secret do JWT de utilizadores |
| `DATABASE_CLIENT` | `postgres` em produção, `sqlite` apenas em dev local |
| `DATABASE_HOST` | Host do Supabase — em Project Settings → Database |
| `DATABASE_PORT` | `5432` |
| `DATABASE_NAME` | `postgres` |
| `DATABASE_USERNAME` | `postgres` |
| `DATABASE_PASSWORD` | Password do Supabase |
| `DATABASE_SSL` | `true` em produção |
| `CLOUDINARY_NAME` | Cloud name do Cloudinary |
| `CLOUDINARY_KEY` | API Key do Cloudinary |
| `CLOUDINARY_SECRET` | API Secret do Cloudinary |

---

## Correr localmente

```bash
# Instalar dependências
npm install

# Desenvolvimento (com auto-reload)
npm run develop

# Produção
npm run build && npm run start
```

O painel admin fica disponível em `http://localhost:1337/admin`.

---

## Permissões da API pública

No painel admin → Settings → Users & Permissions → Roles → **Public**:

A collection `Post` deve ter apenas estas permissões ativas:
- ✅ `find` — listar posts
- ✅ `findOne` — ler um post pelo slug
- ❌ `create` / `update` / `delete` — desativadas

---

## Deploy no Render

1. Ligar o repo ao Render (Web Service)
2. Build command: `npm run build`
3. Start command: `npm run start`
4. Adicionar todas as variáveis de ambiente em Environment → Environment Variables
5. Para evitar cold starts no plano gratuito, configurar um cron job de ping a cada 10 minutos

---

Desenvolvido por Kawã Alacoque.