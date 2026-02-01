# Kyba Restaurant Website

A modern restaurant website for **Kyba** - Asian Cuisine in Kasavanahalli, Bangalore.

Built with:
- **Backend**: Spring Boot 3 + Java 17 + H2 Database
- **Frontend**: React 18 + Bootstrap 5 + Vite

## Features

- Beautiful landing page with hero section
- Dynamic menu with category filtering
- Online table reservation system
- Contact form
- Fully responsive design
- Modern Asian-inspired theme

## Project Structure

```
kyba-restaurant/
├── backend/                    # Spring Boot API
│   ├── src/main/java/com/kyba/restaurant/
│   │   ├── controller/        # REST endpoints
│   │   ├── entity/            # JPA entities
│   │   ├── repository/        # Data repositories
│   │   └── config/            # CORS & data init
│   └── pom.xml
│
└── frontend/                   # React SPA
    ├── src/
    │   ├── components/        # Navbar, Footer
    │   ├── pages/             # Home, Menu, Contact, Reservation
    │   └── services/          # API client
    └── package.json
```

## Quick Start

### Prerequisites
- Java 17+
- Node.js 18+
- Maven

### Backend Setup

```bash
cd backend

# Run the Spring Boot app
./mvnw spring-boot:run

# Or with Maven installed
mvn spring-boot:run
```

The API will be available at `http://localhost:8080`

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start dev server
npm run dev
```

The frontend will be available at `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/menu` | Get all menu items |
| GET | `/api/menu/categories` | Get menu grouped by category |
| GET | `/api/menu/category/{category}` | Get items by category |
| POST | `/api/reservations` | Create a reservation |
| GET | `/api/reservations` | Get all reservations |
| POST | `/api/contact` | Submit contact form |

## Database

Using H2 in-memory database for demo. Access H2 console at:
- URL: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:kybadb`
- Username: `sa`
- Password: (empty)

## Demo Data

The app comes pre-loaded with sample menu items including:
- Sushi (Dragon Roll, Rainbow Roll, etc.)
- Dim Sum (Har Gow, Siu Mai, etc.)
- Ramen (Tonkotsu, Miso, etc.)
- And more!

## Customization

### Change Restaurant Info
- Edit contact details in `Footer.jsx` and `Contact.jsx`
- Update location in Google Maps embed
- Modify opening hours

### Add Menu Items
Edit `DataInitializer.java` or add items via API

### Styling
Main styles are in `frontend/src/index.css`
- Colors: Change CSS variables at top
- Fonts: Using Playfair Display + Inter

## Production Deployment

### Backend
```bash
cd backend
mvn clean package
java -jar target/restaurant-1.0.0.jar
```

### Frontend
```bash
cd frontend
npm run build
# Serve the dist/ folder
```

## License

This is a demo project for pitching to Kyba restaurant.

---

Built with ❤️ by Samandeep
