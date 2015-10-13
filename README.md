# NRU_Space_Team
This is the NRU Team's Space App for Browser

# Normal
cap production deploy

# Changes not showing up?
cap production puma:restart

# Getting a 502?
## Connect to the Amazon server
ssh -i ~/.ssh/NRUTeamErica.pem ubuntu@52.88.223.59

## Switch to the deploy user
su - deploy

## Restart Puma
cd /home/deploy/nru-space-team/current && ( RAILS_ENV=production ~/.rvm/bin/rvm ruby-2.2.3 do bundle exec puma -b 'unix:///home/deploy/nru-space-team/shared/tmp/sockets/puma.sock'  -e production  --control 'unix:///home/deploy/nru-space-team/shared/tmp/sockets/pumactl.sock' -S /home/deploy/nru-space-team/shared/tmp/pids/puma.state  >> /home/deploy/nru-space-team/shared/log/puma-production.log 2>&1 & )

## Check that puma is running
ps ax | grep puma
[Look for 'puma: cluster worker 0: xxxxx [date]']

## exit
exit
exit