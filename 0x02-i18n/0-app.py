#!/usr/bin/env python3
''' Basic flask app that creates a single / route
to an index.html page that returns hello world
'''


from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def hello_world():
    ''' function that returns the renderend html template
    '''
    return render_template('0-index.html')


if __name__ == '__main__':
    ''' function that returns the renderend html template
    '''
    app.run()
