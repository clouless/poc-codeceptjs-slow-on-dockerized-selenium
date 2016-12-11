# poc-codeceptjs-slow-on-dockerized-selenium

## Prerequisites

  * Docker installed
  * NodeJS installed  
  
## How to run

```
npm install
```

Startup Dockerized Test Environment

```
# delete named container if exists
if [ ! -z $(docker ps -a | grep local.codeclou.io | awk '{ print $1 }') ]; then docker rm -f local.codeclou.io; fi

# start nginx with testfiles
docker run -d -p 4443:4443 --volume $(pwd)/testfiles/:/opt/www --name local.codeclou.io codeclou/docker-nginx-self-signed-ssl

# start selenium standalone
docker run -d -p 4444:4444 --link local.codeclou.io selenium/standalone-chrome:3.0.1-aluminum
```

Check Docker PS (should look like this)

```
10:41 $ docker ps
CONTAINER ID        IMAGE                                       COMMAND                  CREATED             STATUS              PORTS                    NAMES
6817babd54cb        selenium/standalone-chrome:3.0.1-aluminum   "/opt/bin/entry_point"   2 seconds ago       Up 1 seconds        0.0.0.0:4444->4444/tcp   awesome_rosalind
0cf0aae49feb        codeclou/docker-nginx-self-signed-ssl       "/opt/run.sh"            8 seconds ago       Up 7 seconds        0.0.0.0:4443->4443/tcp   local.codeclou.io
```

Now Run the e2e Tests

```
./node_modules/.bin/codeceptjs run --steps
```