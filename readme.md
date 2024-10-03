
This project fetches quotes from a JSON file, displays them in randomly selected fonts, and includes a link to each trainee's GitHub profile.

## Features

- Random fonts for each quote
- Responsive design for different screen sizes
- Display of quotes with the name of the trainee
- GitHub profile link for each trainee

## Technologies Used

- **HTML**
- **CSS**
- **JavaScript**
- **Google Fonts**
- **JSON**

## How It Works

1. The application fetches data from a `trainees.json` file.
2. Each trainee's quote and name are displayed in a randomly chosen font.
3. A GitHub link is provided for each trainee.
4. The layout adjusts responsively for different screen sizes.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/quotes-display.git
   ```
2. Add a `trainees.json` file in the root folder with the following structure:
   ```json
   [
     {
       "name": "Trainee Name",
       "quote": "This is a trainee's quote.",
       "github": "https://github.com/trainee"
     },
     {
       "name": "Another Trainee",
       "quote": "Another quote from a trainee.",
       "github": "https://github.com/anothertrainee"
     }
   ]
   ```
3. Open `index.html` in your browser to view the project.
