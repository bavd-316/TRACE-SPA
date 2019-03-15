import configparser
from mongoengine import connect
import logging
import time

log = logging.getLogger(__name__)


class Config:
    config = configparser.ConfigParser()
    config.read('config.ini')
    MONGO_DB = config.get('mongodb', 'MONGO_DB',
                          fallback="trace"),
    MONGO_URI = config.get('mongodb', 'MONGO_URI',
                           fallback="mongodb://ds017155.mlab.com:17155/trace"),
    MONGO_USER = config.get('mongodb', 'MONGO_USER',
                            fallback="readonly"),
    MONGO_PASS = config.get('mongodb', 'MONGO_PASS',
                            fallback="password1")


def db_connect(config=Config):
    """
    Connect mongoengine to mongo db. This connection is reused everywhere.
    :param config: Database connection details and parameters
    """
    for _ in range(30):
        try:
            log.info("Attempting to connect to %s at %s...",
                     config.MONGO_DB,
                     config.MONGO_URI)
            # connect(host=config.MONGO_URI,
            #         username=config.MONGO_USER,
            #         password=config.MONGO_PASS)
            connect('mongoenginetest', host='mongomock://localhost')

        except Exception as exc:
            log.warning(
                "Error connecting to mongo, will retry in 1 sec: %r",
                exc)
            time.sleep(1)
        else:
            log.info("Connected...")
            break
    else:
        log.critical("Unable to connect to %s at %s: %r", config.MONGO_DB,
                     config.MONGO_URI, exc)
        raise exc
