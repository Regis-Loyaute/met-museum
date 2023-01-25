#### Steps to run project:

    Execute these commands in the root directory
    1. npm install
    2. npm run dev


##### Docker setup:

    docker build -t met-museum .: This command is used to build a Docker image from the Dockerfile in the current directory (indicated by the . at the end of the command). The -t flag is used to specify a tag (or name) for the image, in this case "met-museum". This command will create an image with the name "met-museum" that you can use to start a container.

    docker tag met-museum reeeeegis/met-museum: This command is used to create a new tag or rename an existing tag for a Docker image. In this case, it's adding a new repository name "reeeeegis" to the existing image "met-museum". The new image will be called "reeeeegis/met-museum".

    docker push reeeeegis/met-museum: This command is used to push an image to a container registry, such as Docker Hub. In this case, it's pushing the image "reeeeegis/met-museum" to the registry. This command will make the image available for others to use.

    docker-compose up --build: This command is used to start and build the services defined in a Docker Compose file. The --build flag is used to rebuild the images for the services, even if they already exist. This command will also start the containers, so they are running and available to be used.

    http://localhost/: This is the URL of the web application that is running on the localhost and being served by the nginx. If the containers are running and the nginx is configured correctly, you should be able to access the application by visiting this URL in a web browser.

    https://hub.docker.com/r/reeeeegis/met-museum