# Lavender

Lavender is a simple blog website built using Flask, a popular Python web framework. The website features a modern design that is optimized for desktop and mobile devices.

## Demo

You can see a live demo of the project [here](https://lavender-blog.herokuapp.com/).

## Features

- Responsive design that works across all devices
- Clean and modern design using Bootstrap
- Simple authentication system using Flask-Login
- Ability to create, edit, and delete blog posts
- Ability to leave comments on blog posts
- Integration with a PostgreSQL database

## Installation and Usage

1. Clone the repository using `git clone https://github.com/fatemeh-ngh/Lavender.git`
2. Navigate to the project directory and create a new virtual environment using `python -m venv venv`
3. Activate the virtual environment using `source venv/bin/activate`
4. Install the required dependencies using `pip install -r requirements.txt`
5. Set the `FLASK_APP` environment variable using `export FLASK_APP=run.py`
6. Initialize the database by running `flask db init`, `flask db migrate`, and `flask db upgrade`
7. Start the development server using `flask run`
8. Open your browser and go to `http://localhost:5000` to view the website

To customize the website with your own content, you can modify the templates in the `templates` directory and the CSS styles in the `static/css` directory.

## Credits

This project was built using the following technologies and resources:

- [Flask](https://flask.palletsprojects.com/en/2.1.x/)
- [Bootstrap](https://getbootstrap.com/)
- [Flask-Login](https://flask-login.readthedocs.io/en/latest/)
- [PostgreSQL](https://www.postgresql.org/)
- [Unsplash](https://unsplash.com/)

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

## Contributing

Contributions are always welcome! If you find any bugs or have ideas for new features, please open an issue or submit a pull request.
