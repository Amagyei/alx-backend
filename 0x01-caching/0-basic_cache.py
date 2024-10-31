#!/usr/bin/env python3
"""BaseCaching module implementing a basic cache class without size limit.
"""

class BaseCaching:
    """BaseCaching defines:
    - constants of your caching system
    - where your data are stored (in a dictionary)
    """
    MAX_ITEMS = 4

    def __init__(self):
        """Initialize the cache storage."""
        self.cache_data = {}

    def print_cache(self):
        """Print the cache contents."""
        print("Current cache:")
        for key in sorted(self.cache_data.keys()):
            print("{}: {}".format(key, self.cache_data.get(key)))

    def put(self, key, item):
        """Add an item to the cache (to be implemented in subclass)."""
        raise NotImplementedError("put must be implemented in your cache class")

    def get(self, key):
        """Retrieve an item by key (to be implemented in subclass)."""
        raise NotImplementedError("get must be implemented in your cache class")


class BasicCache(BaseCaching):
    """BasicCache inherits from BaseCaching and implements a basic cache
    without size restrictions.
    """

    def __init__(self):
        """Initialize the BasicCache."""
        super().__init__()

    def put(self, key, item):
        """Add an item to the cache. If key or item is None, it does nothing."""
        if key is not None and item is not None:
            self.cache_data[key] = item

    def get(self, key):
        """Retrieve an item by key from the cache.
        
        Returns:
            The value associated with the key, or None if the key is not found.
        """
        return self.cache_data.get(key) if key in self.cache_data else None

