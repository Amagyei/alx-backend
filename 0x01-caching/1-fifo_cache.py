#!/usr/bin/env python3
"""First-In First-Out caching module.
"""

from base_caching import BaseCaching


class FIFOCache(BaseCaching):

    def put(self, key, item):
        """Adds an item in the cache.
        """
        if key is None or item is None:
            return
        self.cache_data[key] = item
        if len(cache_data) > self.MAX_ITEMS:
            print(f"DISCARD: {next(iter(self.cache_data))}")
            del self.cache_data[0]

    def get(self, key):
        """Retrieves an item by key.
        """
        return self.cache_data.get(key, None)
