sudo -v

sudo apt-get update
sudo apt-get install -y python-pip
pip install anchorecli

mkdir aevolume
cd aevolume

docker pull docker.io/anchore/anchore-engine:latest
docker create --name ae docker.io/anchore/anchore-engine:latest
docker cp ae:/docker-compose.yaml docker-compose.yaml
docker rm ae

docker-compose pull
docker-compose up -d

cd ..

# Install inline scan script
curl -s https://ci-tools.anchore.io/inline_scan-v0.6.0 > inline_scan.sh
chmod +x inline_scan.sh