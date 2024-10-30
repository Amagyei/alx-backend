#!/usr/bin/env python3
"""
2-hypermedia_pagination.py
"""

from typing import List
import math
import csv
index_range = __import__('0-simple_helper_function').index_range


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """gets page according to index
        """
        assert int(page) > 0
        assert int(page_size) > 0
        start_index, end_index = index_range(page, page_size)

        return self.dataset()[start_index:end_index]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> List[List]:
        """ gets hyper media page
        """
        no_pages = math.ceil(len(self.dataset()) / page_size)
        return {
            'page_size': page_size,
            'page': page,
            'data': self.get_page(page, page_size),
            'next_page': page + 1 if page < no_pages else None,
            'prev_page': page - 1 if page > 1 else None,
            'total_pages': no_pages}
