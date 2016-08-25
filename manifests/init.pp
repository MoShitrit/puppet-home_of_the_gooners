class home_of_the_gooners {
  file { '/usr/share/nginx/html':
    ensure => 'directory',
    owner => 'root',
    group => 'root',
    recurse => true,
    purge => true,
    force => true,
    mode => 0755,
    source => 'puppet:///modules/home_of_the_gooners/',
    ignore => ['logs'],
  }

  package { 'nginx':
    ensure  =>  'installed',
  }

  service { 'nginx':
    ensure  =>  'running',
  }
}
