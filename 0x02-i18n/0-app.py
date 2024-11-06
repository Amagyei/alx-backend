#!/usr/bin/env python3

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    return return_render('templates/index.html')

if __name__ == '__main__':
    app.run()
