#!/usr/bin/env python3
''' Basic flask app that creates a single / route
to an index.html page that returns hello world
'''


from flask import Flask, render_template
from flask_babel import Babel

app = Flask(__name__)


class Config:
    """Represents a Flask Babel configuration.
    """
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app = Flask(__name__)
app.config.from_object(Config)
app.url_map.strict_slashes = False
babel = Babel(app)


@app.route('/')
def HELLO_WORLD():
    ''' function that returns the renderend html template
    '''
    return render_template('0-index.html')


if __name__ == '__main__':
    ''' function that returns the renderend html template
    '''
    app.run()
