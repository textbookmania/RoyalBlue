/**
 * Created by MGY on 12/13/2015.
 * The chat app of our application will need permissions to chat amongst one another
 * We also need to identify these user so
 */

/**
 * create permission to read
 */
chatStream.permissions.read(function(eventName){
  return eventName == 'chat';
});

/**
 * Create permission to write
 */
chatStream.permissions.write(function(eventName){
  return eventName == 'chat';
});

