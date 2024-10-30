#!/usr/bin/env python3
"""
0-simple_helper_function.py
"""


def index_range(page, page_size):
    '''
    function that checks and returns the start page and end page for a given page and page_size 
    '''
    start_index = page_size * (page - 1)
    end_index = start_index + page_size
    return (start_index, end_index)
