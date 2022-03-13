# default  /var/www/html (mapped to .../code folder with projects)
FROM node:14.17.3

WORKDIR /work

# Additional tools (ng, gulp, bower)
RUN npm install -g n @angular/cli bower gulp grunt

# Get Chrome sources
RUN apt-get update && apt-get install -y \
    apt-transport-https \
    --no-install-recommends

RUN curl -sSL https://dl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb [arch=amd64] https://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list

    # Install Chrome
    # https://www.ubuntuupdates.org/ppa/google_chrome?dist=stable
ENV CHROME_VERSION=97.0.4692.71-1

RUN apt-get update && apt-get install -y \
    google-chrome-stable=$CHROME_VERSION \
    --no-install-recommends


# Run cmd-container
CMD while true; do sleep 10000; done

EXPOSE 3003 4200