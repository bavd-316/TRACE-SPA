from mongoengine import connect
import logging
import time

log = logging.getLogger(__name__)


class Config:
    MONGO_DB = "trace"
    MONGO_URI = "mongodb://ds017155.mlab.com:17155/trace"
    MONGO_USER = "readonly"
    MONGO_PASS = "password1"


config = Config()


def init_db():
    """Connect mongoengine to mongo db. This connection is reused everywhere"""
    for _ in range(30):
        try:
            log.info("Attempting to connect to %s at %s...", config.MONGO_DB,
                     config.MONGO_URI)
            connect(host=config.MONGO_URI,
                    username=config.MONGO_USER,
                    password=config.MONGO_PASS)
        except Exception as exc:
            log.warning("Error connecting to mongo, will retry in 1 sec: %r",
                        exc)
            time.sleep(1)
        else:
            log.info("Connected...")
            break
    else:
        log.critical("Unable to connect to %s at %s: %r", config.MONGO_DB,
                     config.MONGO_URI, exc)
        raise exc
