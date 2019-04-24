import logging
import os

basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'my_secret_key')
    DB_NAME = "trace"
    DB_HOST = "nu-trace.clxfur70m41w.us-east-1.rds.amazonaws.com"
    DB_CRED = f"{os.getenv('DB_USERNAME')}:{os.getenv('DB_PASSWORD')}"
    SQLALCHEMY_DATABASE_URI = f"mysql+pymysql://{DB_CRED}@{DB_HOST}:3306/{DB_NAME}"
    ELASTICSEARCH_URL = os.getenv('ELASTICSEARCH_URL')
    SHOW_QUERIES_DEBUG = False
    DEBUG = False
    LOG_LEVEL = logging.INFO


class DevelopmentConfig(Config):
    DEBUG = True
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SHOW_QUERIES_DEBUG = False


class ProductionConfig(Config):
    DEBUG = False


config_by_name = dict(
    dev=DevelopmentConfig,
    prod=ProductionConfig
)

key = Config.SECRET_KEY
