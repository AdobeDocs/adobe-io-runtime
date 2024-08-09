# Troubleshooting

If you're having trouble with your actions or activations, here are some common issues and solutions.

## Exceeding local storage

To improve performance and reduce the number of cold-start, activations for the same action are scheduled on the same K8s pod up to action concurrency limits.
However, due to this approach activations will share resources available to them such as memory, CPU and local storage.
The local storage size is not configurable and has a limit of [600Mb](./system_settings.md). As pods are getting recycled every [10 minutes](/src/pages/guides/index.md#zoom-in--what-is-happening-when-actions-are-invoked) heavily used actions can fill up the local storage and cause the activation to fail.

The error message that indicates exceeding local storage is:
```
The pod exceeded its local storage and was evicted with X in flight activations
```

The most common reasons for exceeding local storage are:
 - Writing too many log messages
 - Log messages are heavy, for instance include entire JavaScript or JSON objects
