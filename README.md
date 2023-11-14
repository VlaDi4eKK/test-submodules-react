# Инициализация подмодулей проекта

Чтобы инициализировать модули, нужно выполнить команды:

```shell
git submodule update --init --recursive
git submodule foreach -q --recursive \
'branch="$(git config -f $toplevel/.gitmodules submodule.$name.branch)"; git switch ${branch}'
git submodule
```


