﻿namespace DefineX.MessageBus
{
    public interface IMessageBus
    {
        Task PublishMessage(BaseMessage message, string topicName);
    }
}
