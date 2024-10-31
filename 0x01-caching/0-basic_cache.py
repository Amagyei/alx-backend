""" BaseCaching module
"""

class BaseCaching():
    """ BaseCaching defines:
      - constants of your caching system
      - where your data are stored (in a dictionary)
    """
    MAX_ITEMS = 4

    def __init__(self):
        """ Initiliaze
        """
        self.cache_data = {}

    def print_cache(self):
        """ Print the cache
        """
        print("Current cache:")
        for key in sorted(self.cache_data.keys()):
            print("{}: {}".format(key, self.cache_data.get(key)))

    def put(self, key, item):
        """ Add an item in the cache
        """
        raise NotImplementedError("put must be implemented in your cache class")

    def get(self, key):
        """ Get an item by key
        """
        raise NotImplementedError("get must be implemented in your cache class")


class BasicCache(BaseCaching):
    """ BaseCaching defines:
      - variables of your caching system
      - where your data are stored (in a dictionary)
      - for FIFO CACHING
    """

    def __init__(self):
        """ Initiliaze
        """
        super().__init()

    def put(self, key, item):
        """ Add an item in the cache
        """
        if (key is None) or (item is None):
            pass
        self.cache_data.update({key: item})

    def get(self, key):
        """ gets an item with the key
        """
        if (key is None) or (key not in self.cache_data):
            return None
        self.cache_data.get(key)
