package com.kendinsoylecalisan;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import android.content.res.Resources;
import android.os.Bundle; // here 
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import org.devio.rn.splashscreen.SplashScreen; // here 

public class MainActivity extends ReactActivity {

  
@Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);  // here
    super.onCreate(savedInstanceState);
  }

  
   @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
  @Override
  protected ReactRootView createRootView() {
  return new RNGestureHandlerEnabledRootView(MainActivity.this);
  }
};
}
}
